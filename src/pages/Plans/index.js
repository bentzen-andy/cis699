import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PlansAll from "./PlansAll";
import PlanDetail from "./PlanDetail";
import NewPlanConfirmation from "./NewPlanConfirmation";
import PlanRemovalConfirmation from "./PlanRemovalConfirmation";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route index element={<PlansAll />} />
      <Route
        path="new/"
        element={
          <PlanDetail
            isEditMode={true}
            hasButtons={false}
            hasSubmitButton={true}
            hasDeleteButton={false}
          />
        }
      />
      <Route
        path="view/:planId"
        element={
          <PlanDetail
            isEditMode={false}
            hasButtons={true}
            hasSubmitButton={false}
            hasDeleteButton={true}
          />
        }
      />

      <Route path="new-plan-confirm" element={<NewPlanConfirmation />} />
      <Route
        path="plan-removal-confirm"
        element={<PlanRemovalConfirmation />}
      />
    </Routes>
  );
};

export default Plans;
