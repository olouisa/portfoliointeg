import { useEffect, useState } from "react";
import Datas from "../lists/projects.json";







export function useOneCard(id)  {
    const projects = Datas.projects;
    const [card, setCard] = useState(projects.find((project) => project.id == id));
  
     return {
      card
  }
}