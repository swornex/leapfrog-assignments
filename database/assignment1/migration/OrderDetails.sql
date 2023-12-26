-- Active: 1703583549926@@localhost@5432@swornima_day_1@public
CREATE TABLE OrderDetails(
  OrderDetailID int PRIMARY KEY,
  OrderID int,
  ProductID int,
  Quantity int,
  FOREIGN KEY(OrderID) REFERENCES Orders(OrderID),
  FOREIGN KEY(ProductID) REFERENCES Products(ProductID)
);
