FROM golang:1.14.3-alpine AS build
WORKDIR /app
COPY main.go .
RUN go build -o /desafio .

FROM scratch
COPY --from=build /desafio /
CMD [ "./desafio" ]