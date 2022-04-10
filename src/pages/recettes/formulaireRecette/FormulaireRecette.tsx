import React, { useState } from 'react';

import TextFieldWithTags from "components/textfieldWithTags/TextFieldWithTags";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

import { Recette } from "types/recette.type";

import { pushNewRecette } from 'script/requests';

import './FormulaireRecette.css';

type State = Recette;
enum FieldToUpdate {
    NAME,
    TIME,
    INGREDIENTS,
    RECETTE
}

const emptyState = () => (
    {
        id: Date.now() + "-" + Math.floor(Math.random() * 1000000),
        name: "",
        time: 0,
        price: 0,
        ingredients: [],
        recette: []
    }
);

function FormulaireRecette({ addRecette }: { addRecette: (recette: Recette) => void }) {

    const [state, setState] = useState<State>(emptyState());

    function dispatch(fieldToUpdate: FieldToUpdate, value: string | string[] | number) {
        switch (fieldToUpdate) {
            case FieldToUpdate.NAME:
                setState({ ...state, name: value as string });
                break;
            case FieldToUpdate.TIME:
                setState({ ...state, time: value as number });
                break;
            case FieldToUpdate.INGREDIENTS:
                setState({ ...state, ingredients: value as string[] });
                break;
            case FieldToUpdate.RECETTE:
                setState({ ...state, recette: value as string[] });
                break;
        }
    }

    const handleSubmitForm = () => {
        pushNewRecette(state);
        addRecette(state);
        setState(emptyState());
    };

    return (
        <div id="formulaire-recette">
            <div id="formulaire-recette_slider-name-row" className='formulaire-recette__row'>
                <TextField
                    label="nom de la recette"
                    onChange={(event) => dispatch(FieldToUpdate.NAME, event.target.value)} />
                <div id="formulaire-recette__slider-field">
                    Temps de préparation :
                    <Slider
                        min={0}
                        max={60}
                        step={5}
                        valueLabelDisplay="auto"
                        onChange={(event, newValue) => dispatch(FieldToUpdate.TIME, newValue as number)} />
                </div>
            </div>
            <TextFieldWithTags
                label="ingredient"
                buttonText="ajouter"
                onChange={(value) => dispatch(FieldToUpdate.INGREDIENTS, value)}
                className='formulaire-recette__row' />
            <TextFieldWithTags
                label="étape de recette"
                buttonText="ajouter"
                onChange={(value) => dispatch(FieldToUpdate.RECETTE, value)}
                className='formulaire-recette__row' />
            <Button onClick={handleSubmitForm}>Ajouter recette</Button>
        </div>
    );
}

export default FormulaireRecette;