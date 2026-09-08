#!/bin/bash

# Script para encriptar o certificates.json local antes do push para o GitHub.

# Garante que estamos no diretório do projeto
cd "$(dirname "$0")"

# Verifica se o arquivo original existe
if [ ! -f "data/certificates.json" ]; then
    echo -e "\e[31m[Erro]\e[0m Arquivo data/certificates.json não encontrado."
    exit 1
fi

# Solicita a senha se ela não estiver na variável de ambiente DECRYPT_PASSPHRASE
if [ -z "$DECRYPT_PASSPHRASE" ]; then
    read -s -p "Digite a senha de criptografia (a mesma configurada como segredo no GitHub): " PASSPHRASE
    echo ""
else
    PASSPHRASE=$DECRYPT_PASSPHRASE
fi

if [ -z "$PASSPHRASE" ]; then
    echo -e "\e[31m[Erro]\e[0m Senha não pode ser vazia."
    exit 1
fi

# Executa o GPG para encriptar
gpg --symmetric --batch --yes --passphrase "$PASSPHRASE" --output data/certificates.json.gpg data/certificates.json

if [ $? -eq 0 ]; then
    echo -e "\e[32m[Sucesso]\e[0m Arquivo data/certificates.json.gpg gerado com sucesso!"
    echo "Agora você pode commitar e dar push no arquivo data/certificates.json.gpg com segurança."
else
    echo -e "\e[31m[Erro]\e[0m Falha ao criptografar o arquivo."
    exit 1
fi
