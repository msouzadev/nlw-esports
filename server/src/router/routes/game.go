package routes

import (
	"net/http"
	"server/src/controllers"
)

var gameRoutes = []Route{
	{
		URI:         "/games",
		Method:      http.MethodGet,
		Handler:     controllers.ListAllGames,
		Middlewares: []string{},
	},
}
