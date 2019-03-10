import { call, put, fork, takeLatest } from "redux-saga/effects";

import * as actions from "../ducks/temp";

import axios from "axios";

const rootFolder = {"data":{"Sent Items":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAAz","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBCgAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Tasks":{"changeKey":"BAAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA8","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBEwAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Calendar":{"changeKey":"AgAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA3","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBDgAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Outbox":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA1","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBDAAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Journal":{"changeKey":"BgAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA6","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBEQAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Deleted Items":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA0","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBCwAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Drafts":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA5","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBEAAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Junk Email":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoVOQ","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoVHaAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Contacts":{"changeKey":"AwAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA4","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBDwAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"TestFolder":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoXXz","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoV2dAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Conversation Action Settings":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoVOY","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoVHbAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Inbox":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoXnj","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBDQAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Notes":{"changeKey":"BQAAABYAAACfGuEnVRClSr4IFVck0/K5AAAAAAA7","uniqueId":"AQMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAADcivAPeSlykSJiQCqLrmliu8BAJ8a4SdVEKVKvggVVyTT8rkAAAIBEgAAAA==","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"}},"success":true,"message":"List of emails","errors":{},"timestamp":"2019-03-09T17:34:03.219"}
const subFolder1 = {"data":{"Subfolder2":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoXno","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoWlZAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"Trade Recaps":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoWQX","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoWGIAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"}},"success":true,"message":"List of emailFolders","errors":{},"timestamp":"2019-03-09T17:47:33.950"}
const subFolder2 = {"data":{"Subfolder3":{"changeKey":"AQAAABYAGuEnVRClSr4IFVck0/K5AAACoXno","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoWlZAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"},"sub Folder4":{"changeKey":"AQAAABYAAACfGuEnVRClSr4IFVck0/K5AAACoWQX","uniqueId":"AAMkADk3ODM2MjdjLWY1ZWItNDZmMC05ZDkxLWU3NmZiMTI5Yjk3ZQAuAAAAAAByK8A95KXKRImJqi65pYrvAQCfGuEnVRClSr4IFVck0/K5AAACoWGIAAA=","folderName":null,"mailbox":null,"xmlElementName":"FolderId","valid":true,"namespace":"Types"}},"success":true,"message":"List of emailFolders","errors":{},"timestamp":"2019-03-09T17:47:33.950"}


function* tempSaga(action) {
    try {
      //yield call(axios.get("/taskinetics"));
      yield put(actions.successAction());
    } catch (error) {
      yield console.log(error);
    }
}

function* getRootFoldersSaga(action) {
  try {
    let treeData = {
      name: "a",
      children: []
    }
    yield put(actions.getRootFolderSuccess(rootFolder.data));
  } catch (error) {
    yield console.log(error);
  }
}

function* getSubFoldersSaga(action) {
  try {
    if(action.id === "TestFolder") {
      yield put(actions.getSubFolderSuccess(action.id, subFolder1.data));
    } else {
      yield put(actions.getSubFolderSuccess(action.id, subFolder2.data));
    }
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchTempSaga() {
    yield takeLatest(actions.FIRST_API_REQUEST, tempSaga);
}

export function* watchGetRootFoldersSaga() {
  yield takeLatest(actions.GET_ROOT_FOLDERS_REQUEST, getRootFoldersSaga);
}

export function* watchGetSubFoldersSaga() {
  yield takeLatest(actions.GET_SUB_FOLDERS_REQUEST, getSubFoldersSaga);
}

export default function* rootSaga() {
    yield [
      fork(watchTempSaga),
      fork(watchGetRootFoldersSaga),
      fork(watchGetSubFoldersSaga)
    ]
}