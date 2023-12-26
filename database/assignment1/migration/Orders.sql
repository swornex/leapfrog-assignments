-- Active: 1703583549926@@localhost@5432@swornima_day_1@public
CREATE TABLE Orders(
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  EmployeeID INT,
  OrderDate DATE,
  ShipperID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
  FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
  FOREIGN KEY (ShipperID) REFERENCES Shippers(ShipperID)
);
