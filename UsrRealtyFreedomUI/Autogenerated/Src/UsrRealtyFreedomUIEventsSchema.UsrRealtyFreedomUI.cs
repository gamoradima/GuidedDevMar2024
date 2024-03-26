namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyFreedomUIEventsSchema

	/// <exclude/>
	public class UsrRealtyFreedomUIEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyFreedomUIEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyFreedomUIEventsSchema(UsrRealtyFreedomUIEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7bc21304-c775-40f3-943f-f0e02165ef51");
			Name = "UsrRealtyFreedomUIEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1bbae0e9-4701-4158-9566-ec50a579ce9c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,43,206,207,77,85,112,86,86,72,206,79,73,85,40,207,204,201,81,72,74,85,200,72,45,74,213,3,1,5,77,77,0,85,145,228,235,33,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7bc21304-c775-40f3-943f-f0e02165ef51"));
		}

		#endregion

	}

	#endregion

}

