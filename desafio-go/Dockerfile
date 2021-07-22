FROM golang as builder

WORKDIR /app

COPY . ./app

RUN go run ./app/main.go

FROM scratch

WORKDIR /app

COPY --from=builder ./app ./app

CMD [ "./app/desafio-go" ]