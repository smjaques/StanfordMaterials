import pymysql.cursors

#parameters are the name of the material and a dictionary containing the
#material classification information
#i.e. clssificationDict = { 'sustainability': 10,
#                           'waterResistance': 10,
#                           'maleability': 1,
#                           'weldability': 7 }
def getMaterialInfo(categories):
    name = input("Name of Material: ")
    print("Please rank this material on a scale of 1 - 10 for each category\n")
    classificationDict = {}
    for category in categories:
        rank = int(input(category + ": "))
        classificationDict[category] = rank
    materialDict = {name: classificationDict}
    return materialDict


def addCategory(existingCategories, connection):
    newCategory = input('new Materical Classification Category to add: ')
    if newCategory not in existingCategories:
        existingCategories.append(newCategory)
        print(existingCategories)
        with connection.cursor() as cursor:
            sql = ('ALTER TABLE MaterialDB ADD ' + newCategory + ' INT;')
            cursor.execute(sql)
            connection.commit()
            
        return existingCategories
        




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
#        materialDict = getMaterialInfo(categories)
        #Adding the Material's data to the SQL Database
#        for key, value in materialDict.items():
#            sql = ("INSERT INTO MaterialDB (Name) Values (%s)")
#            val = (key)
#            cursor.execute(sql, val)
#            connection.commit()
#            for k, v in value.items():
#                sql = ("UPDATE MaterialDB SET "+k+"=%s WHERE Name='"+key+"'")
#                val = (v)
#                cursor.execute(sql, val)
#                connection.commit()
        connection.close()


        
        #after all material data is added, user would select categories they
        #want materials ranked high in
        #sort the data in sql by each category and take top 5 maybe
        #find largest average ranks for top materials
        


if __name__ == '__main__':
    main()
