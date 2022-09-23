package routes

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Route struct {
	URI         string
	Method      string
	Handler     func(http.ResponseWriter, *http.Request)
	Middlewares []string
}

func Setup(router *mux.Router) *mux.Router {
	routes := gameRoutes

	for _, route := range routes {
		router.HandleFunc(route.URI, route.Handler).Methods(route.Method)
	}
	return router
}
