DROP DATABASE foodie_db;
Create the foodie_db;
  USE foodie_db;
Create table`foodie`(
      'id': Int( 11 ) AUTO_INCREMENT NOT NULL,
      'food_name': VARCHAR( 255) NOT NULL,
      'devoured':   TRUE BOOLEAN,
       PRIMARY KEY ( `id` ) 
       );

  