import React, { useState, useEffect } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './texteditor.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const TextEditor = () => {
    const _contentState = ContentState.createFromText('');
    const [convertedContent, setConvertedContent] = useState(null);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const raw = convertToRaw(_contentState);  // RawDraftContentState JSON
    const [contentState, setContentState] = useState(raw); // ContentState JSON
    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);
    return (
        <React.Fragment>

            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </React.Fragment>)
}