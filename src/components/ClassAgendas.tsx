import { FC, useState } from "react";
import { ClassDashboardProps } from "../types/appTypes";;

const ClassAgendas:FC<ClassDashboardProps> = (props): JSX.Element => {

  const {agendaItems, agendas, classes} = props;

  const [view, setView] = useState('classes');

  const getCurrentView = () => {
    if (view === 'classes') {
      return (
        <></>
      );
    };
  };

  return (
    <>
      {getCurrentView()}
    </>
  )
};

export default ClassAgendas;