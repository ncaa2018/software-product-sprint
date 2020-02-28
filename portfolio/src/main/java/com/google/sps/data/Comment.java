
package com.google.sps.data;

/** A comment within the comments section. */
public final class Comment {

  private final long id;
  private final String text;
  private final long time;

  public Comment(long id, String text, long time) {
    this.id = id;
    this.text = text;
    this.time = time;
  }
}