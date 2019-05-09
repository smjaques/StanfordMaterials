pymysql.install_as_MySQLdb()
import MySQLdb

def main():

    db= MySQLdb.connect("localhost", "root", "JaquesStanPoly", "StanfordMaterials")

    cursor= db.cursor()

    cursor.execute("ALTER TABLE Materials ADD name VARCHAR(100) NOT NULL")

    db.close()

if __name__ == '__main__':
    main()
