import React, { useEffect, useState } from "react";
import { Avatar, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@material-ui/core";

import { useFoodEntry as useStyles } from "../styles/Food";

function FoodEntry() {
  const [food, setFood] = useState([]);
  const styles = useStyles();

  const foods = [
    {
      id: 1,
      title: "Apple",
      desc: "This is an apple",
      img: "https://gic-hackathon.s3.ap-southeast-1.amazonaws.com/apple.jpeg"
    },
    {
      id: 2,
      title: "Orange",
      desc: "This is an orange",
      img: "https://gic-hackathon.s3.ap-southeast-1.amazonaws.com/orange.jpeg"
    },
  ];

  useEffect(() => {
    setFood(foods);
  }, []);

  return (
    <div className={styles.container}>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={styles.tableHeadCell}>Id</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Title</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Desc</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {food.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.desc}</TableCell>
                <TableCell align="center">
                  <Avatar
                    alt="food"
                    src={item.img}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FoodEntry;
