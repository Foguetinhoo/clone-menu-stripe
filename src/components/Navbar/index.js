import React from 'react';

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
                        content={() => <h1>Produtos</h1>}
                    />
                </ListItem>
                <ListItem>
                    <DropdownOption
                        name="Desenvolvedores"
                        content={() => <h1>Desenvolvedores</h1>}
                    />
                </ListItem>
                <ListItem>
                    <DropdownOption
                        name="Empresa"
                        content={() => <h1>Empresa</h1>}
                    />
                </ListItem>
            </List>
        </Container>
        </DropdownStyles>
    )
}
