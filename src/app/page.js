"use client";

import { useState } from "react";

import {
  Button,
  Card,
  Checkbox,
  Container,
  FormActions,
  FormField,
  FormSection,
  Heading,
  Input,
  Label,
  PasswordField,
  Stack,
  Text,
} from "@tefi/design-system";

export default function Page() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = () => {

    alert(
      JSON.stringify(
        {
          email,
          password,
        },
        null,
        2
      )
    );
  };

  return (
    <Container size="sm">

      <Card>
        <Card.Body>

          <Stack gap="lg">

            <Stack gap="xs">

              <Heading>
                Iniciar sesión
              </Heading>

              <Text>
                Ingresa tus credenciales
                para continuar.
              </Text>

            </Stack>

            <FormSection>

              <FormField>

                <Label>
                  Correo electrónico
                </Label>

                <Input
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  placeholder="
                    correo@ejemplo.com
                  "
                />

              </FormField>

              <FormField>

                <Label>
                  Contraseña
                </Label>

                <PasswordField
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="
                    ••••••••
                  "
                />

              </FormField>

              <Checkbox>
                Recordarme
              </Checkbox>

            </FormSection>

            <FormActions>

              <Button
                fullWidth
                onClick={handleSubmit}
              >
                Ingresar
              </Button>

            </FormActions>

          </Stack>

        </Card.Body>
      </Card>

    </Container>
  );
}