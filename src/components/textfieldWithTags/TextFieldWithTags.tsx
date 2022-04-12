import React, { useState, useCallback, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    label: string;
    buttonText: string;
    onChange?: (value: string[]) => void;
    className?: string;
    value?: string[]
}

function TextFieldWithTags({ label, buttonText, onChange, className = "", value = [] } : Props) {
    console.log(label, " : ", buttonText, onChange, className, value);
    const [tagName, setTagName] = useState<string>("");
    const [tagList, setTagList] = useState<string[]>(value);

    useEffect(() => {
        setTagList(value);
        if (value === []) setTagName("");
    }, [value ? value : []]);
    
    const handleDelete = useCallback(
        (tag : string) => () => {
            const tagIndex = tagList.indexOf(tag);
            if (onChange) {
                onChange([ ...tagList.slice(0, tagIndex), ...tagList.slice(tagIndex + 1 , tagList.length)]);
            } else {
                setTagList([ ...tagList.slice(0, tagIndex), ...tagList.slice(tagIndex + 1 , tagList.length)]);
            }
        },
        [tagList, onChange]
    );

    const handleAdd = () => {
        if(tagName !== "") {
            if (onChange) {
                onChange([...tagList, tagName]);
                console.log("kermit : ", onChange);
            } else {
                setTagList([...tagList, tagName]);
                console.log("fozzy");
            }
            setTagName("");
        }
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