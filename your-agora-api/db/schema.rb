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

ActiveRecord::Schema.define(version: 20161213212827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "article_searches", force: :cascade do |t|
    t.integer  "article_id"
    t.integer  "search_term_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["article_id"], name: "index_article_searches_on_article_id", using: :btree
    t.index ["search_term_id"], name: "index_article_searches_on_search_term_id", using: :btree
  end

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

  create_table "leanings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "prog_lean",  default: 1
    t.integer  "cons_lean",  default: 1
    t.integer  "libr_lean",  default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["user_id"], name: "index_leanings_on_user_id", using: :btree
  end

  create_table "reactions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "rating"
  end

  create_table "search_terms", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "search_count"
  end

  create_table "sources", force: :cascade do |t|
    t.string   "name"
    t.string   "leaning"
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
  end

  add_foreign_key "article_searches", "articles"
  add_foreign_key "article_searches", "search_terms"
  add_foreign_key "leanings", "users"
  add_foreign_key "stashes", "articles"
  add_foreign_key "stashes", "users"
end
