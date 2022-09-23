package main

import (
	"fmt"
	"log"
	"net/http"
	"server/src/config"
	"server/src/router"

	"github.com/rs/cors"
)

func init() {
	config.Load()
}

func main() {
	fmt.Printf("Running api in %d\n", config.ApiPort)

	routes := router.Generate()
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	})
	handler := c.Handler(routes)

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.ApiPort), handler))
}
