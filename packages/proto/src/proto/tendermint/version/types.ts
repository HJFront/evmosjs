// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: tendermint/version/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace tendermint.version {
    export class App extends pb_1.Message {
        constructor(data?: any[] | {
            protocol?: number;
            software?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("protocol" in data && data.protocol != undefined) {
                    this.protocol = data.protocol;
                }
                if ("software" in data && data.software != undefined) {
                    this.software = data.software;
                }
            }
        }
        get protocol() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set protocol(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get software() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set software(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            protocol?: number;
            software?: string;
        }) {
            const message = new App({});
            if (data.protocol != null) {
                message.protocol = data.protocol;
            }
            if (data.software != null) {
                message.software = data.software;
            }
            return message;
        }
        toObject() {
            const data: {
                protocol?: number;
                software?: string;
            } = {};
            if (this.protocol != null) {
                data.protocol = this.protocol;
            }
            if (this.software != null) {
                data.software = this.software;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.protocol !== undefined)
                writer.writeUint64(1, this.protocol);
            if (typeof this.software === "string" && this.software.length)
                writer.writeString(2, this.software);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): App {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new App();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.protocol = reader.readUint64();
                        break;
                    case 2:
                        message.software = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): App {
            return App.deserialize(bytes);
        }
    }
    export class Consensus extends pb_1.Message {
        constructor(data?: any[] | {
            block?: number;
            app?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("block" in data && data.block != undefined) {
                    this.block = data.block;
                }
                if ("app" in data && data.app != undefined) {
                    this.app = data.app;
                }
            }
        }
        get block() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set block(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get app() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set app(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            block?: number;
            app?: number;
        }) {
            const message = new Consensus({});
            if (data.block != null) {
                message.block = data.block;
            }
            if (data.app != null) {
                message.app = data.app;
            }
            return message;
        }
        toObject() {
            const data: {
                block?: number;
                app?: number;
            } = {};
            if (this.block != null) {
                data.block = this.block;
            }
            if (this.app != null) {
                data.app = this.app;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.block !== undefined)
                writer.writeUint64(1, this.block);
            if (this.app !== undefined)
                writer.writeUint64(2, this.app);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Consensus {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Consensus();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.block = reader.readUint64();
                        break;
                    case 2:
                        message.app = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Consensus {
            return Consensus.deserialize(bytes);
        }
    }
}
