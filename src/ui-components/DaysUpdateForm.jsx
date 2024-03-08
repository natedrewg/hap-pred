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
import { getDays } from "../graphql/queries";
import { updateDays } from "../graphql/mutations";
const client = generateClient();
export default function DaysUpdateForm(props) {
  const {
    id: idProp,
    days: daysModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Game: false,
    Practice: false,
    Indo: false,
    Lift: false,
    WallBall: false,
    PT: false,
    Homework: false,
    Nap: false,
    VideoGames: false,
    JessCall: false,
    Hangout: false,
    Parents: false,
    GoodEvent: false,
    BadEvent: false,
    BibleTime: false,
    Classes: false,
    BibleStudy: false,
    Satisfied: false,
    Prayed: false,
    Meals: "",
    StressedOut: "",
    Healthy: "",
    Happy: "",
    Sleep: "",
    Description: "",
    Homewok: false,
    Stressed: false,
  };
  const [Game, setGame] = React.useState(initialValues.Game);
  const [Practice, setPractice] = React.useState(initialValues.Practice);
  const [Indo, setIndo] = React.useState(initialValues.Indo);
  const [Lift, setLift] = React.useState(initialValues.Lift);
  const [WallBall, setWallBall] = React.useState(initialValues.WallBall);
  const [PT, setPT] = React.useState(initialValues.PT);
  const [Homework, setHomework] = React.useState(initialValues.Homework);
  const [Nap, setNap] = React.useState(initialValues.Nap);
  const [VideoGames, setVideoGames] = React.useState(initialValues.VideoGames);
  const [JessCall, setJessCall] = React.useState(initialValues.JessCall);
  const [Hangout, setHangout] = React.useState(initialValues.Hangout);
  const [Parents, setParents] = React.useState(initialValues.Parents);
  const [GoodEvent, setGoodEvent] = React.useState(initialValues.GoodEvent);
  const [BadEvent, setBadEvent] = React.useState(initialValues.BadEvent);
  const [BibleTime, setBibleTime] = React.useState(initialValues.BibleTime);
  const [Classes, setClasses] = React.useState(initialValues.Classes);
  const [BibleStudy, setBibleStudy] = React.useState(initialValues.BibleStudy);
  const [Satisfied, setSatisfied] = React.useState(initialValues.Satisfied);
  const [Prayed, setPrayed] = React.useState(initialValues.Prayed);
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
  const [Homewok, setHomewok] = React.useState(initialValues.Homewok);
  const [Stressed, setStressed] = React.useState(initialValues.Stressed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = daysRecord
      ? { ...initialValues, ...daysRecord }
      : initialValues;
    setGame(cleanValues.Game);
    setPractice(cleanValues.Practice);
    setIndo(cleanValues.Indo);
    setLift(cleanValues.Lift);
    setWallBall(cleanValues.WallBall);
    setPT(cleanValues.PT);
    setHomework(cleanValues.Homework);
    setNap(cleanValues.Nap);
    setVideoGames(cleanValues.VideoGames);
    setJessCall(cleanValues.JessCall);
    setHangout(cleanValues.Hangout);
    setParents(cleanValues.Parents);
    setGoodEvent(cleanValues.GoodEvent);
    setBadEvent(cleanValues.BadEvent);
    setBibleTime(cleanValues.BibleTime);
    setClasses(cleanValues.Classes);
    setBibleStudy(cleanValues.BibleStudy);
    setSatisfied(cleanValues.Satisfied);
    setPrayed(cleanValues.Prayed);
    setMeals(cleanValues.Meals);
    setStressedOut(cleanValues.StressedOut);
    setHealthy(cleanValues.Healthy);
    setHappy(cleanValues.Happy);
    setSleep(cleanValues.Sleep);
    setDescription(cleanValues.Description);
    setHomewok(cleanValues.Homewok);
    setStressed(cleanValues.Stressed);
    setErrors({});
  };
  const [daysRecord, setDaysRecord] = React.useState(daysModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDays.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDays
        : daysModelProp;
      setDaysRecord(record);
    };
    queryData();
  }, [idProp, daysModelProp]);
  React.useEffect(resetStateValues, [daysRecord]);
  const validations = {
    Game: [{ type: "Required" }],
    Practice: [{ type: "Required" }],
    Indo: [{ type: "Required" }],
    Lift: [{ type: "Required" }],
    WallBall: [{ type: "Required" }],
    PT: [{ type: "Required" }],
    Homework: [],
    Nap: [{ type: "Required" }],
    VideoGames: [{ type: "Required" }],
    JessCall: [{ type: "Required" }],
    Hangout: [{ type: "Required" }],
    Parents: [{ type: "Required" }],
    GoodEvent: [{ type: "Required" }],
    BadEvent: [{ type: "Required" }],
    BibleTime: [],
    Classes: [{ type: "Required" }],
    BibleStudy: [],
    Satisfied: [{ type: "Required" }],
    Prayed: [],
    Meals: [{ type: "Required" }],
    StressedOut: [],
    Healthy: [{ type: "Required" }],
    Happy: [{ type: "Required" }],
    Sleep: [{ type: "Required" }],
    Description: [{ type: "Required" }],
    Homewok: [],
    Stressed: [],
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
          Game,
          Practice,
          Indo,
          Lift,
          WallBall,
          PT,
          Homework: Homework ?? null,
          Nap,
          VideoGames,
          JessCall,
          Hangout,
          Parents,
          GoodEvent,
          BadEvent,
          BibleTime: BibleTime ?? null,
          Classes,
          BibleStudy: BibleStudy ?? null,
          Satisfied,
          Prayed: Prayed ?? null,
          Meals,
          StressedOut: StressedOut ?? null,
          Healthy,
          Happy,
          Sleep,
          Description,
          Homewok: Homewok ?? null,
          Stressed: Stressed ?? null,
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
            query: updateDays.replaceAll("__typename", ""),
            variables: {
              input: {
                id: daysRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DaysUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Game"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Game}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game: value,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice: value,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo: value,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift: value,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall: value,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT: value,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Homework"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Homework}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework: value,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Nap"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Nap}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap: value,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames: value,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall: value,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout: value,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents: value,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent: value,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent: value,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Bible time"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BibleTime}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime: value,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Classes"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Classes}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes: value,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Bible study"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BibleStudy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy: value,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
        label="Satisfied"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Satisfied}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied: value,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
      <SwitchField
        label="Prayed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Prayed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed: value,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals: value,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut: value,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy: value,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy: value,
              Sleep,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep: value,
              Description,
              Homewok,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description: value,
              Homewok,
              Stressed,
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
        label="Homewok"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Homewok}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok: value,
              Stressed,
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
              Game,
              Practice,
              Indo,
              Lift,
              WallBall,
              PT,
              Homework,
              Nap,
              VideoGames,
              JessCall,
              Hangout,
              Parents,
              GoodEvent,
              BadEvent,
              BibleTime,
              Classes,
              BibleStudy,
              Satisfied,
              Prayed,
              Meals,
              StressedOut,
              Healthy,
              Happy,
              Sleep,
              Description,
              Homewok,
              Stressed: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || daysModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || daysModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
