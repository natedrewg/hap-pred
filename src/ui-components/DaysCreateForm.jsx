/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createDays } from "../graphql/mutations";
const client = generateClient();
export default function DaysCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    id: "",
    Game: false,
    Practice: false,
    Indo: false,
    Lift: false,
    WallBall: false,
    PT: false,
    Nap: false,
    Homework: false,
    VideoGames: false,
    JessCall: false,
    Hangout: false,
    Parents: false,
    GoodEvent: false,
    BadEvent: false,
    Classes: false,
    BibleTime: false,
    BibleStudy: false,
    Prayed: false,
    Satisfied: false,
    Meals: "",
    StressedOut: "",
    Healthy: "",
    Happy: "",
    Sleep: "",
    Description: "",
  };
  const [id, setId] = React.useState(initialValues.id);
  const [Game, setGame] = React.useState(initialValues.Game);
  const [Practice, setPractice] = React.useState(initialValues.Practice);
  const [Indo, setIndo] = React.useState(initialValues.Indo);
  const [Lift, setLift] = React.useState(initialValues.Lift);
  const [WallBall, setWallBall] = React.useState(initialValues.WallBall);
  const [PT, setPT] = React.useState(initialValues.PT);
  const [Nap, setNap] = React.useState(initialValues.Nap);
  const [Homework, setHomework] = React.useState(initialValues.Homework);
  const [VideoGames, setVideoGames] = React.useState(initialValues.VideoGames);
  const [JessCall, setJessCall] = React.useState(initialValues.JessCall);
  const [Hangout, setHangout] = React.useState(initialValues.Hangout);
  const [Parents, setParents] = React.useState(initialValues.Parents);
  const [GoodEvent, setGoodEvent] = React.useState(initialValues.GoodEvent);
  const [BadEvent, setBadEvent] = React.useState(initialValues.BadEvent);
  const [Classes, setClasses] = React.useState(initialValues.Classes);
  const [BibleTime, setBibleTime] = React.useState(initialValues.BibleTime);
  const [BibleStudy, setBibleStudy] = React.useState(initialValues.BibleStudy);
  const [Prayed, setPrayed] = React.useState(initialValues.Prayed);
  const [Satisfied, setSatisfied] = React.useState(initialValues.Satisfied);
  const [Meals, setMeals] = React.useState(initialValues.Meals);
  const [StressedOut, setStressedOut] = React.useState(
    initialValues.StressedOut
  );
  const [Healthy, setHealthy] = React.useState(initialValues.Healthy);
  const [Happy, setHappy] = React.useState(initialValues.Happy);
  const [Sleep, setSleep] = React.useState(initialValues.Sleep);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setId(initialValues.id);
    setGame(initialValues.Game);
    setPractice(initialValues.Practice);
    setIndo(initialValues.Indo);
    setLift(initialValues.Lift);
    setWallBall(initialValues.WallBall);
    setPT(initialValues.PT);
    setNap(initialValues.Nap);
    setHomework(initialValues.Homework);
    setVideoGames(initialValues.VideoGames);
    setJessCall(initialValues.JessCall);
    setHangout(initialValues.Hangout);
    setParents(initialValues.Parents);
    setGoodEvent(initialValues.GoodEvent);
    setBadEvent(initialValues.BadEvent);
    setClasses(initialValues.Classes);
    setBibleTime(initialValues.BibleTime);
    setBibleStudy(initialValues.BibleStudy);
    setPrayed(initialValues.Prayed);
    setSatisfied(initialValues.Satisfied);
    setMeals(initialValues.Meals);
    setStressedOut(initialValues.StressedOut);
    setHealthy(initialValues.Healthy);
    setHappy(initialValues.Happy);
    setSleep(initialValues.Sleep);
    setDescription(initialValues.Description);
    setErrors({});
  };
  const validations = {
    id: [{ type: "Required" }],
    Game: [{ type: "Required" }],
    Practice: [{ type: "Required" }],
    Indo: [{ type: "Required" }],
    Lift: [{ type: "Required" }],
    WallBall: [{ type: "Required" }],
    PT: [{ type: "Required" }],
    Nap: [{ type: "Required" }],
    Homework: [],
    VideoGames: [{ type: "Required" }],
    JessCall: [{ type: "Required" }],
    Hangout: [{ type: "Required" }],
    Parents: [{ type: "Required" }],
    GoodEvent: [{ type: "Required" }],
    BadEvent: [{ type: "Required" }],
    Classes: [{ type: "Required" }],
    BibleTime: [],
    BibleStudy: [],
    Prayed: [],
    Satisfied: [{ type: "Required" }],
    Meals: [{ type: "Required" }],
    StressedOut: [],
    Healthy: [{ type: "Required" }],
    Happy: [{ type: "Required" }],
    Sleep: [{ type: "Required" }],
    Description: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          id,
          Game,
          Practice,
          Indo,
          Lift,
          WallBall,
          PT,
          Nap,
          Homework,
          VideoGames,
          JessCall,
          Hangout,
          Parents,
          GoodEvent,
          BadEvent,
          Classes,
          BibleTime,
          BibleStudy,
          Prayed,
          Satisfied,
          Meals,
          StressedOut,
          Healthy,
          Happy,
          Sleep,
          Description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createDays.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DaysCreateForm")}
      {...rest}
    >
      <TextField
        label="Day"
        isRequired={true}
        isReadOnly={false}
        value={id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id: value,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.id ?? value;
          }
          if (errors.id?.hasError) {
            runValidationTasks("id", value);
          }
          setId(value);
        }}
        onBlur={() => runValidationTasks("id", id)}
        errorMessage={errors.id?.errorMessage}
        hasError={errors.id?.hasError}
        {...getOverrideProps(overrides, "id")}
      ></TextField>
      <SwitchField
        label="Game"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Game}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game: value,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Game ?? value;
          }
          if (errors.Game?.hasError) {
            runValidationTasks("Game", value);
          }
          setGame(value);
        }}
        onBlur={() => runValidationTasks("Game", Game)}
        errorMessage={errors.Game?.errorMessage}
        hasError={errors.Game?.hasError}
        {...getOverrideProps(overrides, "Game")}
      ></SwitchField>
      <SwitchField
        label="Practice"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Practice}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice: value,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Practice ?? value;
          }
          if (errors.Practice?.hasError) {
            runValidationTasks("Practice", value);
          }
          setPractice(value);
        }}
        onBlur={() => runValidationTasks("Practice", Practice)}
        errorMessage={errors.Practice?.errorMessage}
        hasError={errors.Practice?.hasError}
        {...getOverrideProps(overrides, "Practice")}
      ></SwitchField>
      <SwitchField
        label="Indo"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Indo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo: value,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Indo ?? value;
          }
          if (errors.Indo?.hasError) {
            runValidationTasks("Indo", value);
          }
          setIndo(value);
        }}
        onBlur={() => runValidationTasks("Indo", Indo)}
        errorMessage={errors.Indo?.errorMessage}
        hasError={errors.Indo?.hasError}
        {...getOverrideProps(overrides, "Indo")}
      ></SwitchField>
      <SwitchField
        label="Lift"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Lift}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift: value,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Lift ?? value;
          }
          if (errors.Lift?.hasError) {
            runValidationTasks("Lift", value);
          }
          setLift(value);
        }}
        onBlur={() => runValidationTasks("Lift", Lift)}
        errorMessage={errors.Lift?.errorMessage}
        hasError={errors.Lift?.hasError}
        {...getOverrideProps(overrides, "Lift")}
      ></SwitchField>
      <SwitchField
        label="Wall ball"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WallBall}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall: value,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.WallBall ?? value;
          }
          if (errors.WallBall?.hasError) {
            runValidationTasks("WallBall", value);
          }
          setWallBall(value);
        }}
        onBlur={() => runValidationTasks("WallBall", WallBall)}
        errorMessage={errors.WallBall?.errorMessage}
        hasError={errors.WallBall?.hasError}
        {...getOverrideProps(overrides, "WallBall")}
      ></SwitchField>
      <SwitchField
        label="Pt"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PT}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT: value,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.PT ?? value;
          }
          if (errors.PT?.hasError) {
            runValidationTasks("PT", value);
          }
          setPT(value);
        }}
        onBlur={() => runValidationTasks("PT", PT)}
        errorMessage={errors.PT?.errorMessage}
        hasError={errors.PT?.hasError}
        {...getOverrideProps(overrides, "PT")}
      ></SwitchField>
      <SwitchField
        label="Nap"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Nap}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap: value,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Nap ?? value;
          }
          if (errors.Nap?.hasError) {
            runValidationTasks("Nap", value);
          }
          setNap(value);
        }}
        onBlur={() => runValidationTasks("Nap", Nap)}
        errorMessage={errors.Nap?.errorMessage}
        hasError={errors.Nap?.hasError}
        {...getOverrideProps(overrides, "Nap")}
      ></SwitchField>
      <SwitchField
        label="Homework"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Homework}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework: value,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Homework ?? value;
          }
          if (errors.Homework?.hasError) {
            runValidationTasks("Homework", value);
          }
          setHomework(value);
        }}
        onBlur={() => runValidationTasks("Homework", Homework)}
        errorMessage={errors.Homework?.errorMessage}
        hasError={errors.Homework?.hasError}
        {...getOverrideProps(overrides, "Homework")}
      ></SwitchField>
      <SwitchField
        label="Video games"
        defaultChecked={false}
        isDisabled={false}
        isChecked={VideoGames}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames: value,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.VideoGames ?? value;
          }
          if (errors.VideoGames?.hasError) {
            runValidationTasks("VideoGames", value);
          }
          setVideoGames(value);
        }}
        onBlur={() => runValidationTasks("VideoGames", VideoGames)}
        errorMessage={errors.VideoGames?.errorMessage}
        hasError={errors.VideoGames?.hasError}
        {...getOverrideProps(overrides, "VideoGames")}
      ></SwitchField>
      <SwitchField
        label="Jess call"
        defaultChecked={false}
        isDisabled={false}
        isChecked={JessCall}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall: value,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.JessCall ?? value;
          }
          if (errors.JessCall?.hasError) {
            runValidationTasks("JessCall", value);
          }
          setJessCall(value);
        }}
        onBlur={() => runValidationTasks("JessCall", JessCall)}
        errorMessage={errors.JessCall?.errorMessage}
        hasError={errors.JessCall?.hasError}
        {...getOverrideProps(overrides, "JessCall")}
      ></SwitchField>
      <SwitchField
        label="Hangout"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Hangout}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout: value,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Hangout ?? value;
          }
          if (errors.Hangout?.hasError) {
            runValidationTasks("Hangout", value);
          }
          setHangout(value);
        }}
        onBlur={() => runValidationTasks("Hangout", Hangout)}
        errorMessage={errors.Hangout?.errorMessage}
        hasError={errors.Hangout?.hasError}
        {...getOverrideProps(overrides, "Hangout")}
      ></SwitchField>
      <SwitchField
        label="Parents"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Parents}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents: value,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Parents ?? value;
          }
          if (errors.Parents?.hasError) {
            runValidationTasks("Parents", value);
          }
          setParents(value);
        }}
        onBlur={() => runValidationTasks("Parents", Parents)}
        errorMessage={errors.Parents?.errorMessage}
        hasError={errors.Parents?.hasError}
        {...getOverrideProps(overrides, "Parents")}
      ></SwitchField>
      <SwitchField
        label="Good event"
        defaultChecked={false}
        isDisabled={false}
        isChecked={GoodEvent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent: value,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.GoodEvent ?? value;
          }
          if (errors.GoodEvent?.hasError) {
            runValidationTasks("GoodEvent", value);
          }
          setGoodEvent(value);
        }}
        onBlur={() => runValidationTasks("GoodEvent", GoodEvent)}
        errorMessage={errors.GoodEvent?.errorMessage}
        hasError={errors.GoodEvent?.hasError}
        {...getOverrideProps(overrides, "GoodEvent")}
      ></SwitchField>
      <SwitchField
        label="Bad event"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BadEvent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent: value,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.BadEvent ?? value;
          }
          if (errors.BadEvent?.hasError) {
            runValidationTasks("BadEvent", value);
          }
          setBadEvent(value);
        }}
        onBlur={() => runValidationTasks("BadEvent", BadEvent)}
        errorMessage={errors.BadEvent?.errorMessage}
        hasError={errors.BadEvent?.hasError}
        {...getOverrideProps(overrides, "BadEvent")}
      ></SwitchField>
      <SwitchField
        label="Classes"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Classes}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes: value,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Classes ?? value;
          }
          if (errors.Classes?.hasError) {
            runValidationTasks("Classes", value);
          }
          setClasses(value);
        }}
        onBlur={() => runValidationTasks("Classes", Classes)}
        errorMessage={errors.Classes?.errorMessage}
        hasError={errors.Classes?.hasError}
        {...getOverrideProps(overrides, "Classes")}
      ></SwitchField>
      <SwitchField
        label="Bible time"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BibleTime}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime: value,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.BibleTime ?? value;
          }
          if (errors.BibleTime?.hasError) {
            runValidationTasks("BibleTime", value);
          }
          setBibleTime(value);
        }}
        onBlur={() => runValidationTasks("BibleTime", BibleTime)}
        errorMessage={errors.BibleTime?.errorMessage}
        hasError={errors.BibleTime?.hasError}
        {...getOverrideProps(overrides, "BibleTime")}
      ></SwitchField>
      <SwitchField
        label="Bible study"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BibleStudy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy: value,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.BibleStudy ?? value;
          }
          if (errors.BibleStudy?.hasError) {
            runValidationTasks("BibleStudy", value);
          }
          setBibleStudy(value);
        }}
        onBlur={() => runValidationTasks("BibleStudy", BibleStudy)}
        errorMessage={errors.BibleStudy?.errorMessage}
        hasError={errors.BibleStudy?.hasError}
        {...getOverrideProps(overrides, "BibleStudy")}
      ></SwitchField>
      <SwitchField
        label="Prayed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Prayed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed: value,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Prayed ?? value;
          }
          if (errors.Prayed?.hasError) {
            runValidationTasks("Prayed", value);
          }
          setPrayed(value);
        }}
        onBlur={() => runValidationTasks("Prayed", Prayed)}
        errorMessage={errors.Prayed?.errorMessage}
        hasError={errors.Prayed?.hasError}
        {...getOverrideProps(overrides, "Prayed")}
      ></SwitchField>
      <SwitchField
        label="Satisfied"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Satisfied}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied: value,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Satisfied ?? value;
          }
          if (errors.Satisfied?.hasError) {
            runValidationTasks("Satisfied", value);
          }
          setSatisfied(value);
        }}
        onBlur={() => runValidationTasks("Satisfied", Satisfied)}
        errorMessage={errors.Satisfied?.errorMessage}
        hasError={errors.Satisfied?.hasError}
        {...getOverrideProps(overrides, "Satisfied")}
      ></SwitchField>
      <TextField
        label="Meals"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Meals}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals: value,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Meals ?? value;
          }
          if (errors.Meals?.hasError) {
            runValidationTasks("Meals", value);
          }
          setMeals(value);
        }}
        onBlur={() => runValidationTasks("Meals", Meals)}
        errorMessage={errors.Meals?.errorMessage}
        hasError={errors.Meals?.hasError}
        {...getOverrideProps(overrides, "Meals")}
      ></TextField>
      <TextField
        label="Stressed out"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={StressedOut}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut: value,
              Healthy,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.StressedOut ?? value;
          }
          if (errors.StressedOut?.hasError) {
            runValidationTasks("StressedOut", value);
          }
          setStressedOut(value);
        }}
        onBlur={() => runValidationTasks("StressedOut", StressedOut)}
        errorMessage={errors.StressedOut?.errorMessage}
        hasError={errors.StressedOut?.hasError}
        {...getOverrideProps(overrides, "StressedOut")}
      ></TextField>
      <TextField
        label="Healthy"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Healthy}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy: value,
              Happy,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Healthy ?? value;
          }
          if (errors.Healthy?.hasError) {
            runValidationTasks("Healthy", value);
          }
          setHealthy(value);
        }}
        onBlur={() => runValidationTasks("Healthy", Healthy)}
        errorMessage={errors.Healthy?.errorMessage}
        hasError={errors.Healthy?.hasError}
        {...getOverrideProps(overrides, "Healthy")}
      ></TextField>
      <TextField
        label="Happy"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Happy}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy: value,
              Sleep,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Happy ?? value;
          }
          if (errors.Happy?.hasError) {
            runValidationTasks("Happy", value);
          }
          setHappy(value);
        }}
        onBlur={() => runValidationTasks("Happy", Happy)}
        errorMessage={errors.Happy?.errorMessage}
        hasError={errors.Happy?.hasError}
        {...getOverrideProps(overrides, "Happy")}
      ></TextField>
      <TextField
        label="Sleep"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Sleep}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Sleep ?? value;
          }
          if (errors.Sleep?.hasError) {
            runValidationTasks("Sleep", value);
          }
          setSleep(value);
        }}
        onBlur={() => runValidationTasks("Sleep", Sleep)}
        errorMessage={errors.Sleep?.errorMessage}
        hasError={errors.Sleep?.hasError}
        {...getOverrideProps(overrides, "Sleep")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Nap,
              Homework,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              Classes,
              BibleTime,
              BibleStudy,
              Prayed,
              Satisfied,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description: value,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
