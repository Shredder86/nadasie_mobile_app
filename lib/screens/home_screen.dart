import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('NaDaSie'),
      ),
      body: Center(
        child: Text('Welcome to NaDaSie Store'),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Start'),
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Koszyk'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Konto'),
        ],
      ),
    );
  }
}