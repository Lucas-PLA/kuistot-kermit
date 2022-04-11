import React, { useState, useCallback } from 'react';

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import css from '@emotion/css';

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
            <div css={{display: 'flex'}}>
                <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={tagName}
                    sx={{marginRight: '20px'}}
                    label={label} />
                <Button onClick={handleAdd} variant="contained">{buttonText}</Button>
            </div>
            <Stack direction="row" spacing={1} sx={{margin: '10px 0'}}>
                { tagList.map((tag, index) => 
                    <Chip label={tag} onDelete={handleDelete(tag)} key={index}/>
                )}
            </Stack>
        </div>
    );
}

export default TextFieldWithTags;