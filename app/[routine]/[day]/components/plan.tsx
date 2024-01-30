import styled from "styled-components";

import { PlanType } from "../../../lib/typesTs";

export default function Plan({
  data,
  rowsnumber,
}: {
  data: PlanType;
  rowsnumber: number;
}) {
  const containt: string[] = data.containt;
  return (
    <StyledPlan rowsnumber={rowsnumber}>
      <p className="name-plan">{data.name}</p>
      <div>
        <ol className="plan-container">
          {containt.map((item: string) => (
            <li
              className="item-plan"
              key={item}
              style={{ listStyleType: "decimal" }}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </StyledPlan>
  );
}

const StyledPlan = styled.div<{ rowsnumber: number }>`
  && {
  }
  .name-plan {
    font-size: 0.8rem;
    font-weight: 600;
    padding-left: 0.5rem;
    /* margin-left: 0.5rem; */
    width: 100%;
  }

  .plan-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* margin-bottom: 1rem; */
  }

  .item-plan {
    font-size: calc(22vh / ${({ rowsnumber }) => rowsnumber});
    margin-left: 3rem;
    width: 80%;
  }
`;
