import requests

# API Endpoint URL and query parameters for Indeed
url = "https://indeed-indeed.p.rapidapi.com/apigetjobs"
x_rapidapi_key = "c2f96ca2e3mshb7be3442b22d314p17a176jsn412484ff13b9"
x_rapidapi_host = "indeed-indeed.p.rapidapi.com"

querystring = {"v":"2","format":"json"}

headers = {
	"x-rapidapi-key": x_rapidapi_key,
	"x-rapidapi-host": x_rapidapi_host
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())