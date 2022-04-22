import React, { useReducer } from 'react';

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
interface Action {
    type: FieldToUpdate | 'RESET',
    value: string | string[] | number | null
} 

const emptyState = () => (
    {
        id: Date.now() + "-" + Math.floor(Math.random() * 1000000),
        name: "",
        time: 0,
        price: 0,
        ingredients: [],
        recette: [],
    }
);

function reducer(state: State, {type, value}: Action) : State {
    switch (type) {
        case FieldToUpdate.NAME:
            return { ...state, name: value as string };
        case FieldToUpdate.TIME:
            return { ...state, time: value as number };
        case FieldToUpdate.INGREDIENTS:
            return { ...state, ingredients: value as string[] };
        case FieldToUpdate.RECETTE:
            return { ...state, recette: value as string[] };
        case 'RESET':
            return emptyState();
    }
}

function FormulaireRecette({ addRecette }: { addRecette: (recette: Recette) => void }) {
    const [state, dispatch] = useReducer(reducer, emptyState());

    const handleSubmitForm = () => {
        pushNewRecette(state);
        addRecette(state);
        dispatch({ type: 'RESET', value: null });
    };

    return (
        <div id="formulaire-recette">
            <div id="formulaire-recette_slider-name-row" className='formulaire-recette__row'>
                <TextField
                    label="nom de la recette"
                    onChange={(event) => dispatch({ type: FieldToUpdate.NAME, value: event.target.value })}
                    value={state.name}/>
                <div id="formulaire-recette__slider-field">
                    Temps de préparation :
                    <Slider
                        min={0}
                        max={60}
                        step={5}
                        valueLabelDisplay="auto"
                        value={state.time}
                        onChange={(event, newValue) => dispatch({ type: FieldToUpdate.TIME, value: newValue as number })} />
                </div>
            </div>
            <TextFieldWithTags
                label="ingredient"
                buttonText="ajouter"
                onChange={(value) => dispatch({type: FieldToUpdate.INGREDIENTS, value: value})}
                className='formulaire-recette__row'
                value={state.ingredients} />
            <TextFieldWithTags
                label="étape de recette"
                buttonText="ajouter"
                onChange={(value) => dispatch({ type: FieldToUpdate.RECETTE, value: value })}
                className='formulaire-recette__row'
                value={state.recette} />
            <Button onClick={handleSubmitForm}>Ajouter recette</Button>
        </div>
    );
}

export default FormulaireRecette;