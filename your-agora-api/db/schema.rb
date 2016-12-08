# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161208052346) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title"
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "source_id"
    t.string   "author"
    t.string   "content"
    t.integer  "word_count"
    t.string   "img_url"
  end

  create_table "reactions", force: :cascade do |t|
    t.string   "user_id"
    t.string   "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "rating"
  end

  create_table "sources", force: :cascade do |t|
    t.string   "name"
    t.integer  "leaning"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "domain"
  end

  create_table "stashes", force: :cascade do |t|
    t.integer  "article_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_stashes_on_article_id", using: :btree
    t.index ["user_id"], name: "index_stashes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "r_lean"
    t.integer  "l_lean"
    t.integer  "a_lean"
  end

  add_foreign_key "stashes", "articles"
  add_foreign_key "stashes", "users"
end
