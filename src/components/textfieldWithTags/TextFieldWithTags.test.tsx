import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextFieldWithTags from './TextFieldWithTags';

it('ajoute un nouveau tag en cas de clic sur la validation', () => {
    const user = userEvent.setup();

    let value = undefined;
    let onChange = undefined; 
    render(<TextFieldWithTags
        label='label'
        buttonText='buttonText'
        value={value}
        onChange={onChange} />);

    user.type(screen.getByLabelText('label'), 'un tag');
    user.click(screen.getByRole('button'));

    expect(screen.getByText('un tag')).toBeDefined();
    expect(screen.getByText('de tag')).not.toBeDefined();
})

// it('n'ajoute pas de tag si le champs de saisi est vide');

// it('vide le champs de saisie en cas de validation');

// it('supprime un tag en cas de clic sur le bouton de suppression');

// TODO : props optionnelles