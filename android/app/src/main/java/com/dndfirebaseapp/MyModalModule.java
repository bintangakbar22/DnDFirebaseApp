package com.dndfirebaseapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import android.app.AlertDialog;
import android.content.DialogInterface;

public class MyModalModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;
    MyModalModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "MyModalModule";
    }

    @ReactMethod
    public void showInputModal(String inputText) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity()); // Get the current activity

        builder.setTitle("Modal dari Native Java")
                .setMessage("Input Text: " + inputText)
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                })
                .show();

        // Optionally, you can still send an event back to JavaScript if needed:
        WritableMap params = Arguments.createMap();
        params.putString("result", inputText);
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("onInputResult", params);
    }
}

