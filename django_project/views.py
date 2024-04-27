  # views.py

from django.shortcuts import render
import requests

def index(request):
      # Fetch cryptocurrency data from the API
      r = requests.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      res = r.json()
      price = res['bpi']['USD']['rate']

      # You can fetch data for other cryptocurrencies similarly

      
      

      return render(request, 'templates/index.html', {'price': price})
