FROM golang:1.17-alpine3.13

RUN apk add bash
WORKDIR /go/src

#vamos mudar para o endpoint correto. Usando top apenas para segurar o processo rodando
ENTRYPOINT [ "top" ]