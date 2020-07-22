import React from 'react';

import {Products,Developers,Company} from '../../Content'
import { Container, List, ListItem, DropdownStyles } from './style';
import { DropdownOption } from '../Dropdown'

export default function Navbar() {
    return(
    <DropdownStyles>
        <Container>
            <List>
                <ListItem>
                    <DropdownOption
                        name="Produtos"
                        content={Products}
                    />
                </ListItem>
                <ListItem>
                    <DropdownOption
                        name="Desenvolvedores"
                        content={Developers}
                    />
                </ListItem>
                <ListItem>
                    <DropdownOption
                        name="Empresa"
                        content={Company}
                    />
                </ListItem>
            </List>
        </Container>
        </DropdownStyles>
    )
}
