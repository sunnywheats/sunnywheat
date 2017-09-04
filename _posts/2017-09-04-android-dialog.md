---
layout: post
title:  "Dialog篇"
date:   2017-09-04 14:22:30 +0800
categories: [Android]
excerpt: 
tags:
  - Android
  - dialog
---
一、在activity里弹出框

{% highlight javascript %}

import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.app.Dialog;

public void showDialog() {
	Dialog dialog = new AlertDialog.Builder(this)
			.setIcon(0)
			.setTitle("title")
			.setMessage("message")
			.setPositiveButton(android.R.string.ok,
					new DialogInterface.OnClickListener() {

						@Override
						public void onClick(DialogInterface dialog,
								int which) {
							// TODO Auto-generated method stub
							// click
						}
					})
			.setNegativeButton(android.R.string.cancel, null)
			.create();
	//dialog.setCanceledOnTouchOutside(false);
	dialog.show();
}
{% endhighlight %}
