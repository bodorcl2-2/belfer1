import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import { TodoContext } from "../context/TodoContext";

import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Todo = (props) => {

  const { handleOnDeleteTask, handleOnEditTask } = useContext(TodoContext);

  const history = useHistory()

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      ml={4}
      mr={4}
      p={2}
      boxShadow={2}
    >
      <Box width="10%" textAlign="center">
        <Typography
          variant="h5"
          color="primary"
          gutterBottom
        >
          {props.taskGroup}
        </Typography>
      </Box>
      <Tooltip title="Tu będą kiedyś wyświetlane szczeguły zadania ;)">
        <Box width="30%" textAlign="center">
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
          >
            {props.taskName}
          </Typography>
        </Box>
      </Tooltip>
      <Box width="20%" textAlign="center">
        <Typography
          variant="h6"
        >
          {props.taskDate}
        </Typography>
      </Box>
      <Box width="20%" textAlign="center">
        <Typography
          variant="h6"
        >
          {props.taskTime}
        </Typography>
      </Box>
      <Box
        width="20%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          id={props.id}
          // czy da się przypisać dwa działania pod jedno zdarzenie?
          onClick={() => history.push(`/edit${props.id}`)}
          onMouseUp={handleOnEditTask}
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
        >
          Edytuj
            </Button>
        <Button
          id={props.id}
          onClick={handleOnDeleteTask}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Usuń
      </Button>
      </Box >
    </Box >
  );
};

export default Todo;
