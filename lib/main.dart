import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(NadasieApp());
}

class NadasieApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NaDaSie',
      theme: ThemeData(
        primaryColor: Color(0xFFFF6F00),
        accentColor: Color(0xFF4CAF50),
      ),
      home: HomeScreen(),
    );
  }
}