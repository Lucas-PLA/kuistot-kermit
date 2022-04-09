import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { Recette } from 'types/recette.type';
import { deleteRecette } from 'script/requests';

interface Props {
    recettes : Recette[];
    setRecettes : (recettes: Recette[]) => void;
}

function TableRecette({recettes, setRecettes} : Props) {
    
    const handleDelete = (id: string) => () => {
        deleteRecette(id);
        const idRecette = recettes.findIndex(element => element.id === id);
        setRecettes([...recettes.slice(0, idRecette), ...recettes.slice(idRecette + 1, recettes.length)]);
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