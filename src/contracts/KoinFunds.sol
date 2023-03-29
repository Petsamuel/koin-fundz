// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract KoinFunds {
    address public owner;
    uint public projectTax;
    uint public projectCount;
    uint public balance;
    statsStruct public stats;
    projectStruct[] projects;

    mapping(address => projectStruct[]) projectsOf;
    mapping(uint => investorStruct[]) investorsOf;
    mapping(uint => bool) projectExist;

    enum statusEnum {
        OPEN,
        APPROVED,
        REVERTED,
        DELETED,
        PAIDOUT
    }

    struct statsStruct {
        uint totalProjects;
        uint totalInvestments;
        uint totalDonations;
    }

    struct investorStruct {
        address owner;
        uint contributions;
        uint timestamp;
        bool refunded;
    }

    struct projectStruct {
        uint id;
        address owner;
        string name;
        string title;
        string description;
        string imageURL;
        uint goal;
        uint raised;
        uint timestamp;
        uint expiresAt;
        string organizationType;
        string companyName;
        string email;
        string companyAddress;
        string country;
        string state;
        string website;
        uint investors;
        statusEnum status;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "Owner only");
        _;
    }

    event Action(
        uint256 id,
        string actionType,
        address indexed executor,
        uint timestamp
    );

    constructor(uint _projectTax) {
        owner = msg.sender;
        projectTax = _projectTax;
    }

    function createProject(
        string memory title,
        string memory description,
        string memory imageURL,
        uint goal,
        uint expiresAt,
        string memory organizationType,
        string memory companyName,
        string memory email,
        string memory companyAddress,
        string memory country,
        string memory website,
        string memory state
    ) public returns (bool) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "Image url cannot be empty");
        require(goal > 0 ether, "Cost cannot be 0 eth");
        // require(expiresAt > block.timestamp, "Timt too short");
        require(
            bytes(organizationType).length > 0,
            "Organization type cannot be empty"
        );
        require(bytes(companyName).length > 0, "Company name cannot be empty");
        require(bytes(email).length > 0, "Email cannot be empty");
        require(bytes(companyAddress).length > 0, "Address cannot be empty");
        require(bytes(country).length > 0, "Country cannot be empty");
        require(bytes(state).length > 0, "State cannot be empty");
        require(bytes(website).length > 0, "Website cannot be empty");

        projectStruct memory project;
        project.id = projectCount;
        project.owner = msg.sender;
        project.title = title;
        project.description = description;
        project.imageURL = imageURL;
        project.goal = goal;
        project.timestamp = block.timestamp;
        project.expiresAt = expiresAt;
        project.organizationType = organizationType;
        project.companyName = companyName;
        project.email = email;
        project.companyAddress = companyAddress;
        project.country = country;
        project.state = state;
        project.website = website;

        projects.push(project);
        projectExist[projectCount] = true;
        projectsOf[msg.sender].push(project);
        stats.totalProjects += 1;

        emit Action(
            projectCount++,
            "PROJECT CREATED",
            msg.sender,
            block.timestamp
        );
        return true;
    }

    function updateProject(
        uint id,
        string memory title,
        string memory description,
        string memory imageURL,
        uint expiresAt
    ) public returns (bool) {
        require(msg.sender == projects[id].owner, "Unauthorized");
        require(projectExist[id], "Project not found");
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "Image url cannot be empty");
        // require(expiresAt > block.timestamp, "Timt too short");

        projects[id].title = title;
        projects[id].description = description;
        projects[id].imageURL = imageURL;
        projects[id].expiresAt = expiresAt;

        emit Action(id, "PROJECT UPDATED", msg.sender, block.timestamp);

        return true;
    }

    function deleteProject(uint id) public returns (bool) {
        require(projectExist[id], "Project not found");
        require(projects[id].status == statusEnum.OPEN, "Project closed");
        require(
            msg.sender == projects[id].owner || msg.sender == owner,
            "Unauthorized"
        );

        projects[id].status = statusEnum.DELETED;
        performRefund(id);

        emit Action(id, "PROJECT DELETED", msg.sender, block.timestamp);

        return true;
    }

    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }

    function performInvestment(uint id) public payable returns (bool) {
        require(msg.value > 0 ether, "Ether must be greater than 0");
        require(projectExist[id], "Project not found");
        require(
            projects[id].status == statusEnum.OPEN,
            "Project no longer active"
        );

        stats.totalInvestments += 1;
        stats.totalDonations += msg.value;
        projects[id].raised += msg.value;
        projects[id].investors += 1;

        investorsOf[id].push(
            investorStruct(msg.sender, msg.value, block.timestamp, false)
        );

        emit Action(id, "INVESTMENT MADE", msg.sender, block.timestamp);

        if (projects[id].raised >= projects[id].goal) {
            projects[id].status = statusEnum.APPROVED;
            balance += projects[id].raised;
            performPayout(id);
            return true;
        }

        if (block.timestamp >= projects[id].expiresAt) {
            projects[id].status = statusEnum.REVERTED;
            performRefund(id);
            return true;
        }
        return true;
    }

    function performRefund(uint id) internal {
        for (uint i = 0; i < investorsOf[id].length; i++) {
            address _owner = investorsOf[id][i].owner;
            uint _contribution = investorsOf[id][i].contributions;

            investorsOf[id][i].refunded = true;
            investorsOf[id][i].timestamp = block.timestamp;
            payTo(_owner, _contribution);

            stats.totalInvestments -= 1;
            stats.totalDonations -= _contribution;
        }
    }

    function performPayout(uint id) internal {
        uint raised = projects[id].raised;
        uint tax = (raised * projectTax) / 100;

        payTo(projects[id].owner, (raised - tax));
        payTo(owner, tax);

        balance -= projects[id].raised;

        emit Action(id, "PROJECT PAID OUT", msg.sender, block.timestamp);
    }

    function requestRefund(uint id) public returns (bool) {
        require(
            projects[id].status != statusEnum.REVERTED ||
                projects[id].status != statusEnum.DELETED,
            "Project not marked as reverted or deleted"
        );

        projects[id].status = statusEnum.REVERTED;
        performRefund(id);
        return true;
    }

    function payOutProject(uint id) public returns (bool) {
        require(
            projects[id].status == statusEnum.APPROVED,
            "Project no longer APPROVED"
        );
        require(
            msg.sender == projects[id].owner || msg.sender == owner,
            "Unauthorized"
        );

        performPayout(id);
        return true;
    }

    function changeTax(uint _tax) public ownerOnly {
        projectTax = _tax;
    }

    function getProject(uint id) public view returns (projectStruct memory) {
        require(projectExist[id], "Project not found");
        return projects[id];
    }

    function getProjects() public view returns (projectStruct[] memory) {
        return projects;
    }

    function getProjectInvestors(
        uint id
    ) public view returns (investorStruct[] memory) {
        return investorsOf[id];
    }
}
