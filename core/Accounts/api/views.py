from django.http import JsonResponse


def getRoutes(request):
    routes = ["api/token", "api/refreshtoken"]
    return JsonResponse(routes, safe=False)
