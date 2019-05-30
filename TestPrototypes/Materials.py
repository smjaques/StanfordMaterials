import pymysql.cursors

#parameters are the name of the material and a dictionary containing the
#material classification information
#i.e. clssification_dict = { 'sustainability': 10,
#                           'waterResistance': 10,
#                           'maleability': 1,
#                           'weldability': 7 }
def get_material_info(categories):
    name = input("Name of Material: ")
    print("Please rank this material on a scale of 1 - 10 for each category\n")
    classification_dict = {}
    for category in categories:
        rank = int(input(category + ": "))
        classification_dict[category] = rank
    material_dict = {name: classification_dict}
    return material_dict


def add_category(existing_categories, connection):
    new_category = input('new Materical Classification Category to add: ')
    if new_category not in existing_categories:
        existing_categories.append(new_category)
        print(existing_categories)
        with connection.cursor() as cursor:
            sql = ('ALTER TABLE MaterialDB ADD ' + new_category + ' INT;')
            cursor.execute(sql)
            connection.commit()
            
        return existing_categories

def main():
    categories = ['sustainability', 'waterResistance', 'maleability', 'wedlability']
    categories = []
    # Connect to the database
    connection = pymysql.connect(host='localhost',
                             user='root',
                             password='JaquesStanPoly',
                             db='StanfordMaterials',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
    with connection.cursor() as cursor:
        cursor.execute("SELECT * from MaterialDB")
        for col in cursor.description:
            if col[0] == 'Name' or col[0] == 'Description':
                continue;
            categories.append(col[0])

        categories = addCategory([], connection)
        material_dict = get_material_info(categories)
        #Adding the Material's data to the SQL Database
        for key, value in material_dict.items():
            sql = ("INSERT INTO MaterialDB (Name) Values (%s)")
            val = (key)
            cursor.execute(sql, val)
            connection.commit()
            for k, v in value.items():
                sql = ("UPDATE MaterialDB SET "+k+"=%s WHERE Name='"+key+"'")
                val = (v)
                cursor.execute(sql, val)
                connection.commit()
        connection.close()


        
        #after all material data is added, user would select categories they
        #want materials ranked high in
        #sort the data in sql by each category and take top 5 maybe
        #find largest average ranks for top materials
        


if __name__ == '__main__':
    main()
