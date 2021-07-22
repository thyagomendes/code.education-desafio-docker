FROM golang:1.14.3-alpine AS build
WORKDIR /app
COPY main.go .
RUN go build -ldflags="-s -w" -o /desafio .

FROM scratch
COPY --from=build /desafio /
CMD [ "./desafio" ]