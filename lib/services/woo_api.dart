import 'package:http/http.dart' as http;

class WooAPI {
  final String baseUrl = 'https://nadasie.pl/wp-json/wc/v3/';
  final String consumerKey = 'ck_0bc5107b993e1a68d20da166ec06726c22d47399';
  final String consumerSecret = 'cs_ec00a0acf4da9993243cfd30b0f2d3eb344dbdc8';

  Future<http.Response> fetchProducts() {
    final url = Uri.parse(baseUrl + 'products?consumer_key=$consumerKey&consumer_secret=$consumerSecret');
    return http.get(url);
  }
}