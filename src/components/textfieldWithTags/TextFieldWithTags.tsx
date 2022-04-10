import React, { useState, useCallback } from 'react';

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './TextFieldWithTags.css';

interface Props {
    label: string;
    buttonText: string;
    onChange: (value: string[]) => void;
    className: string;
}

function TextFieldWithTags({ label, buttonText, onChange, className } : Props) {
    const [tagList, setTagList] = useState<string[]>([]);
    const [tagName, setTagName] = useState<string>("");
    
    const handleDelete = useCallback(
        (tag : string) => () => {
            const tagIndex = tagList.indexOf(tag);
            setTagList([ ...tagList.slice(0, tagIndex), ...tagList.slice(tagIndex + 1 , tagList.length)]);
            onChange(tagList);
        },
        [tagList, onChange]
    );

    const handleAdd = () => {
        if(tagName !== "") setTagList([...tagList, tagName]);
        setTagName("");
        onChange(tagList);
    };

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setTagName(event.target.value);
        },
        []
    );

    return(
        <div className={className}>
            <div id="textfield-with-tags__input-row">
                <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={tagName}
                    id="textfield-with-tags__textfield"
                    label={label} />
                <Button onClick={handleAdd} variant="contained">{buttonText}</Button>
            </div>
            <Stack direction="row" spacing={1} id='textfield-with-tags__tag-stack'>
                { tagList.map((tag, index) => 
                    <Chip label={tag} onDelete={handleDelete(tag)} key={index}/>
                )}
            </Stack>
        </div>
    );
}

export default TextFieldWithTags;