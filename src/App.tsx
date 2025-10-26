import React from "react";
import page from "../page.json";
import { RenderBlocks } from "./blocks";
import type { PageSchemaType } from "./types";
export default function App(){ return <RenderBlocks page={page as PageSchemaType} />; }