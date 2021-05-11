import React, {useLayoutEffect, useRef} from 'react';
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
    const [{ content, color, fontSize }, update] = useEditState();
    const firstContentRef = useRef('');
    function onTextChange(e) {
        const html = e.target.innerHTML;
        console.log(html);
        update({
            content: html,
        });
    }
    useLayoutEffect(
        () => {
            firstContentRef.current = content;
        },
        []
    );
    console.log(content)
    return (
        <div className={css.text} style={{color, fontSize}} contentEditable={process.env.IS_CLIENT === 'true' ? false: true} onPaste={onPaste} onInput={onTextChange} dangerouslySetInnerHTML={{ __html: firstContentRef.current }} />
    );
};
TextContainer.editFields = ['color', 'fontSize'];
TextContainer.defaultProps = {
    color: '#333',
    content: '点击即可输入',
    height: 30,
    fontSize: 12
};
export default TextContainer;
