import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { Recette } from 'types/recette.type';
import { getRecettes } from 'script/requests';

function TableRecette() {

    useEffect(() => {
        getRecettes().then(response => {
            console.log(response);
            // setRecettes(response.data);
        });
    },
    []);
    
    const [recettes, setRecettes] = useState<Recette[]>([]);

    const handleDelete = (id: string) => () => {
        console.log(id);
        //TODO
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nom de la recette</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {recettes.map((recette: Recette) => (
                    <TableRow key={recette.id}>
                        <TableCell>{recette.name}</TableCell>
                        <TableCell>
                            <Button onClick={handleDelete(recette.id)}><DeleteIcon /></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableRecette;