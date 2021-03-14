import React from 'react';
import cn from 'classnames';
import css from './index.module.less';
import { useEditState } from '../editElementWrapper';

interface TextContainerProps {}
function onPaste(e) {
    e = e || window.event;
    e.preventDefault();
    const text = (e.originalEvent || e).clipboardData.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
}

const TextContainer = (props: TextContainerProps) => {
    const [{ content }, update] = useEditState();
    function onTextChange(e) {
        const html = e.target.innerHTML;
        console.log(html);
        update({
            content: html,
        });
    }
    return (
        <div className={css.text} contentEditable onPaste={onPaste} onInput={onTextChange} dangerouslySetInnerHTML={{ __html: content }} />
    );
};
TextContainer.defaultProps = {
    color: 'black',
    content: '',
};
export default TextContainer;
