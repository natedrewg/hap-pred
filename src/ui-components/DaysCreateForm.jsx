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
    Homewok: "",
    Nap: false,
    VideoGames: false,
    JessCall: false,
    Hangout: false,
    Parents: false,
    Stressed: false,
    GoodEvent: false,
    BadEvent: false,
    Classes: false,
    Satisfied: false,
    Meals: "",
    Healthy: "",
    Happy: "",
    Sleep: "",
    Description: "",
    Homework: false,
  };
  const [id, setId] = React.useState(initialValues.id);
  const [Game, setGame] = React.useState(initialValues.Game);
  const [Practice, setPractice] = React.useState(initialValues.Practice);
  const [Indo, setIndo] = React.useState(initialValues.Indo);
  const [Lift, setLift] = React.useState(initialValues.Lift);
  const [WallBall, setWallBall] = React.useState(initialValues.WallBall);
  const [PT, setPT] = React.useState(initialValues.PT);
  const [Homewok, setHomewok] = React.useState(initialValues.Homewok);
  const [Nap, setNap] = React.useState(initialValues.Nap);
  const [VideoGames, setVideoGames] = React.useState(initialValues.VideoGames);
  const [JessCall, setJessCall] = React.useState(initialValues.JessCall);
  const [Hangout, setHangout] = React.useState(initialValues.Hangout);
  const [Parents, setParents] = React.useState(initialValues.Parents);
  const [Stressed, setStressed] = React.useState(initialValues.Stressed);
  const [GoodEvent, setGoodEvent] = React.useState(initialValues.GoodEvent);
  const [BadEvent, setBadEvent] = React.useState(initialValues.BadEvent);
  const [Classes, setClasses] = React.useState(initialValues.Classes);
  const [Satisfied, setSatisfied] = React.useState(initialValues.Satisfied);
  const [Meals, setMeals] = React.useState(initialValues.Meals);
  const [Healthy, setHealthy] = React.useState(initialValues.Healthy);
  const [Happy, setHappy] = React.useState(initialValues.Happy);
  const [Sleep, setSleep] = React.useState(initialValues.Sleep);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Homework, setHomework] = React.useState(initialValues.Homework);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setId(initialValues.id);
    setGame(initialValues.Game);
    setPractice(initialValues.Practice);
    setIndo(initialValues.Indo);
    setLift(initialValues.Lift);
    setWallBall(initialValues.WallBall);
    setPT(initialValues.PT);
    setHomewok(initialValues.Homewok);
    setNap(initialValues.Nap);
    setVideoGames(initialValues.VideoGames);
    setJessCall(initialValues.JessCall);
    setHangout(initialValues.Hangout);
    setParents(initialValues.Parents);
    setStressed(initialValues.Stressed);
    setGoodEvent(initialValues.GoodEvent);
    setBadEvent(initialValues.BadEvent);
    setClasses(initialValues.Classes);
    setSatisfied(initialValues.Satisfied);
    setMeals(initialValues.Meals);
    setHealthy(initialValues.Healthy);
    setHappy(initialValues.Happy);
    setSleep(initialValues.Sleep);
    setDescription(initialValues.Description);
    setHomework(initialValues.Homework);
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
    Homewok: [],
    Nap: [{ type: "Required" }],
    VideoGames: [{ type: "Required" }],
    JessCall: [{ type: "Required" }],
    Hangout: [{ type: "Required" }],
    Parents: [{ type: "Required" }],
    Stressed: [{ type: "Required" }],
    GoodEvent: [{ type: "Required" }],
    BadEvent: [{ type: "Required" }],
    Classes: [{ type: "Required" }],
    Satisfied: [{ type: "Required" }],
    Meals: [{ type: "Required" }],
    Healthy: [{ type: "Required" }],
    Happy: [{ type: "Required" }],
    Sleep: [{ type: "Required" }],
    Description: [{ type: "Required" }],
    Homework: [{ type: "Required" }],
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
          Homewok,
          Nap,
          VideoGames,
          JessCall,
          Hangout,
          Parents,
          Stressed,
          GoodEvent,
          BadEvent,
          Classes,
          Satisfied,
          Meals,
          Healthy,
          Happy,
          Sleep,
          Description,
          Homework,
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
          const modelFieldsToSave = {
            id: modelFields.id,
            Game: modelFields.Game,
            Practice: modelFields.Practice,
            Indo: modelFields.Indo,
            Lift: modelFields.Lift,
            WallBall: modelFields.WallBall,
            PT: modelFields.PT,
            Nap: modelFields.Nap,
            VideoGames: modelFields.VideoGames,
            JessCall: modelFields.JessCall,
            Hangout: modelFields.Hangout,
            Parents: modelFields.Parents,
            Stressed: modelFields.Stressed,
            GoodEvent: modelFields.GoodEvent,
            BadEvent: modelFields.BadEvent,
            Classes: modelFields.Classes,
            Satisfied: modelFields.Satisfied,
            Meals: modelFields.Meals,
            Healthy: modelFields.Healthy,
            Happy: modelFields.Happy,
            Sleep: modelFields.Sleep,
            Description: modelFields.Description,
            Homework: modelFields.Homework,
          };
          await client.graphql({
            query: createDays.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
      <TextField
        label="Label"
        value={Homewok}
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
              Homewok: value,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
            };
            const result = onChange(modelFields);
            value = result?.Homewok ?? value;
          }
          if (errors.Homewok?.hasError) {
            runValidationTasks("Homewok", value);
          }
          setHomewok(value);
        }}
        onBlur={() => runValidationTasks("Homewok", Homewok)}
        errorMessage={errors.Homewok?.errorMessage}
        hasError={errors.Homewok?.hasError}
        {...getOverrideProps(overrides, "Homewok")}
      ></TextField>
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
              Homewok,
              Nap: value,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames: value,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall: value,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout: value,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents: value,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
        label="Stressed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Stressed}
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed: value,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
            };
            const result = onChange(modelFields);
            value = result?.Stressed ?? value;
          }
          if (errors.Stressed?.hasError) {
            runValidationTasks("Stressed", value);
          }
          setStressed(value);
        }}
        onBlur={() => runValidationTasks("Stressed", Stressed)}
        errorMessage={errors.Stressed?.errorMessage}
        hasError={errors.Stressed?.hasError}
        {...getOverrideProps(overrides, "Stressed")}
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent: value,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent: value,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes: value,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied: value,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals: value,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy: value,
              Happy,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy: value,
              Sleep,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep: value,
              Description,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description: value,
              Homework,
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
              Homewok,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              Stressed,
              GoodEvent,
              BadEvent,
              Classes,
              Satisfied,
              Meals,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homework: value,
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
