// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: google/protobuf/duration.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.protobuf {
    export class Duration extends pb_1.Message {
        constructor(data?: any[] | {
            seconds?: number;
            nanos?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("seconds" in data && data.seconds != undefined) {
                    this.seconds = data.seconds;
                }
                if ("nanos" in data && data.nanos != undefined) {
                    this.nanos = data.nanos;
                }
            }
        }
        get seconds() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set seconds(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get nanos() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set nanos(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            seconds?: number;
            nanos?: number;
        }) {
            const message = new Duration({});
            if (data.seconds != null) {
                message.seconds = data.seconds;
            }
            if (data.nanos != null) {
                message.nanos = data.nanos;
            }
            return message;
        }
        toObject() {
            const data: {
                seconds?: number;
                nanos?: number;
            } = {};
            if (this.seconds != null) {
                data.seconds = this.seconds;
            }
            if (this.nanos != null) {
                data.nanos = this.nanos;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.seconds !== undefined)
                writer.writeInt64(1, this.seconds);
            if (this.nanos !== undefined)
                writer.writeInt32(2, this.nanos);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Duration {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Duration();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.seconds = reader.readInt64();
                        break;
                    case 2:
                        message.nanos = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Duration {
            return Duration.deserialize(bytes);
        }
    }
}
